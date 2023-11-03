define([
    'knockout',
    'underscore',
    'mapbox-gl',
    '@deck.gl/mesh-layers',
    '@deck.gl/mapbox',
    '@loaders.gl/core',
    '@loaders.gl/gltf',
    'viewmodels/file-widget',
    'templates/views/components/widgets/three-dimensional-widget.htm'
], function (
    ko, _, mapboxgl, meshLayers, deckMapbox, loaders, gltfLoader, FileWidgetViewModel, widgetTemplate) {
    return ko.components.register('three-dimensional-widget', {
        // Reimplement file metadata-related and image-related portions of the FileWidgetViewModel.
        viewModel: function(params) {
            var self = this;
            FileWidgetViewModel.apply(this, [params]);
            this.params = params;

            this.filesJSON.dispose();  // terminate the inherited subscription
            this.filesJSON = ko.computed(function() {
                var filesForUpload = self.filesForUpload();
                const uploadedFiles = self.uploadedFiles().map(file => {
                    if (ko.isObservable(file.title[self.activeLanguage].value)) {
                        return file;
                    }
                    // Rewrap in observable if needed.
                    return {
                        ...file,
                        lng: ko.observable(file.lng),
                        lat: ko.observable(file.lat),
                        bearing: ko.observable(file.bearing),
                        altText: {
                            ...file.altText,
                            [self.activeLanguage]: {
                                "direction": ko.observable(file.altText[self.activeLanguage].direction),
                                "value": ko.observable(file.altText[self.activeLanguage].value),
                            },
                        },
                        title: {
                            ...file.title,
                            [self.activeLanguage]: {
                                "direction": ko.observable(file.title[self.activeLanguage].direction),
                                "value": ko.observable(file.title[self.activeLanguage].value),
                            },
                        },
                        attribution: {
                            ...file.attribution,
                            [self.activeLanguage]: {
                                "direction": ko.observable(file.attribution[self.activeLanguage].direction),
                                "value": ko.observable(file.attribution[self.activeLanguage].value),
                            },
                        },
                        description: {
                            ...file.description,
                            [self.activeLanguage]: {
                                "direction": ko.observable(file.description[self.activeLanguage].direction),
                                "value": ko.observable(file.description[self.activeLanguage].value),
                            },
                        },
                    };
                });

                var standaloneObservable = self.standaloneObservable();  // for triggering update
                var beforeChangeMetadataSnapshot = self.beforeChangeMetadataSnapshot();
                return uploadedFiles.concat(
                    _.map(filesForUpload, function(file, i) {
                        return {
                            name: file.name,
                            altText: beforeChangeMetadataSnapshot[i]?.altText ?? self.createStrObject(''),
                            title: beforeChangeMetadataSnapshot[i]?.title ?? self.createStrObject(''),
                            attribution: beforeChangeMetadataSnapshot[i]?.attribution ?? self.createStrObject(''),
                            description: beforeChangeMetadataSnapshot[i]?.description ?? self.createStrObject(''),
                            lng: beforeChangeMetadataSnapshot[i]?.lng ?? self.params.config().lng,
                            lat: beforeChangeMetadataSnapshot[i]?.lat ?? self.params.config().lat,
                            bearing: beforeChangeMetadataSnapshot[i]?.bearing ?? self.params.config().bearing,
                            accepted: file.accepted,
                            height: file.height,
                            lastModified: file.lastModified,
                            size: file.size,
                            status: file.status,
                            type: file.type,
                            width: file.width,
                            url: null,
                            file_id: null,
                            index: i,
                            content: URL.createObjectURL(file),
                            error: file.error
                        };
                    })
                );
            }).extend({throttle: 100});

            this.filesJSON.subscribe(function(value) {
                if (self.formData) {
                    if (_.contains(self.formData.keys(), 'file-list_' + self.node.nodeid)) {
                        self.formData.delete('file-list_' + self.node.nodeid);
                    }
                }
                if (value.length > 1 && self.selectedFile() == undefined) { self.selectedFile(value[0]); }
                _.each(self.filesForUpload(), function(file) {
                    if (file.accepted) {
                        self.formData.append('file-list_' + self.node.nodeid, file, file.name);
                    }
                });
                if (ko.unwrap(self.value) !== null || self.filesForUpload().length !== 0 || self.uploadedFiles().length !== 0) {
                    self.value(
                        value.filter(function(file) {
                            return file.accepted;
                        })
                    );
                }
            });

            this.equalMetadata = (a, b) => {
                if (!a || !b) {
                    return false;
                }
                return (
                    a.altText[this.activeLanguage].value === b.altText[this.activeLanguage].value
                    && a.title[this.activeLanguage].value === b.title[this.activeLanguage].value
                    && a.attribution[this.activeLanguage].value === b.title[this.activeLanguage].value
                    && a.description[this.activeLanguage].value === b.title[this.activeLanguage].value
                    && a.lng === b.lng
                    && a.lat === b.lat
                    && a.bearing === b.bearing
                );
            };

            this.metadataIsEmpty = (metadata) => {
                return !metadata.altText[this.activeLanguage].value
                && !metadata.title[this.activeLanguage].value
                && !metadata.attribution[this.activeLanguage].value
                && !metadata.description[this.activeLanguage].value
                && metadata.lng === self.params.config().lng
                && metadata.lat === self.params.config().lat
                && metadata.bearing === self.params.config().bearing
            };

            this.filesJSON.subscribe(function(value) {
                // Preserve current metadata for yet-to-be-uploaded files
                value.filter(
                    file => file.file_id === null
                    // Don't take a snapshot of the unsaved metadata if we're deleting it.
                    && self.filesForUpload().find(f => f.name === file.name)
                ).forEach((file, i) => {
                    const { altText, title, attribution, description, lng, lat, bearing } = file;
                    const metadata = { altText, title, attribution, description, lng, lat, bearing };
                    if (self.metadataIsEmpty(metadata)) {
                        return;
                    }
                    if (!self.equalMetadata(self.beforeChangeMetadataSnapshot()[i], metadata)) {
                        self.beforeChangeMetadataSnapshot()[i] = metadata;
                        self.standaloneObservable.push(Math.random());
                    }
                });
            }, this, 'beforeChange');

            this.reportFiles = ko.computed(function() {
                return self.uploadedFiles().filter(function(file) {
                    const fileName = ko.unwrap(file.name);
                    if (fileName && fileName.endsWith('.glb')) {
                        return false;
                    }
                    var fileType = ko.unwrap(file.type);
                    if (fileType) {
                        var ext = fileType.split('/').pop();
                        return fileType.indexOf('image') < 0 || self.unsupportedImageTypes.indexOf(ext) > -1;
                    }
                    return true;
                });
            });

            this.reportImages = ko.computed(function() {
                return self.uploadedFiles().filter(function(file) {
                    const fileName = ko.unwrap(file.name);
                    if (fileName && fileName.endsWith('.glb')) {
                        return false;
                    }
                    var fileType = ko.unwrap(file.type);
                    if (fileType) {
                        var ext = fileType.split('/').pop();
                        return fileType.indexOf('image') >= 0 && self.unsupportedImageTypes.indexOf(ext) <= 0;
                    }
                    return false;
                });
            });

            this.reportModels = ko.computed(function() {
                return self.uploadedFiles().filter(file => ko.unwrap(file.name).endsWith('.glb'));
            });

            this.renderedModels = new Set();  // file_ids

            this.renderWithDeck = (model) => async function() {
                const containerId = `modal-body-${self.unique_id}-${ko.unwrap(model.file_id)}`;
                if (document.getElementById(containerId) && !self.renderedModels.has(ko.unwrap(model.file_id))) {
                    const url = self.getFileUrl(ko.unwrap(model.url));
                    await fetch(url)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failure to load gltf');
                            }
                            return response;
                        })
                        .then(async(response) => { return await response.arrayBuffer() })
                        .then(buffer => { self.createMap(buffer, model, containerId) });
                }
            };

            this.createMap = (buffer, model, containerId) => {
                const map = new mapboxgl.Map({
                    container: containerId,
                    style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',
                    center: [Number.parseFloat(ko.unwrap(model.lng)), Number.parseFloat(ko.unwrap(model.lat))],
                    zoom: 8,
                    pitch: 30,
                    maxPitch: 60,
                    maxZoom: 25,
                    bearing: Number.parseFloat(ko.unwrap(model.bearing)),
                });

                const deckOverlay = new deckMapbox.MapboxOverlay({
                    layers: [
                        new meshLayers.ScenegraphLayer({
                            scenegraph: loaders.parse(buffer, gltfLoader.GLTFLoader),

                            id: 'ScenegraphLayer',

                            _animations: {
                                '*': {speed: 5}
                            },
                            _lighting: 'flat',
                            getOrientation: d => [0, Math.random() * 180, 90],
                            getPosition: d => d.coordinates,
                            sizeScale: 1,
                            pickable: true,
                        }),
                    ],
                    });

                map.addControl(deckOverlay);
                map.addControl(new mapboxgl.NavigationControl());

                // Force the map to resize after bootstrap modal CSS is applied.
                setTimeout(() => {
                    map.resize();
                }, 250);

                self.renderedModels.add(ko.unwrap(model.file_id));
            };
        },
        template: widgetTemplate,
    });
});
