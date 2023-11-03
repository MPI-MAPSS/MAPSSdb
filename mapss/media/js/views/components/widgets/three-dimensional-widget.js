define([
    'knockout',
    'underscore',
    'viewmodels/file-widget',
    'templates/views/components/widgets/three-dimensional-widget.htm'
], function (
    ko, _, FileWidgetViewModel, widgetTemplate) {
    return ko.components.register('three-dimensional-widget', {
        // Reimplement file metadata-related portions of the FileWidgetViewModel.
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
        },
        template: widgetTemplate,
    });
});
