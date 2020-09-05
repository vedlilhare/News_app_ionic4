import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
let LoadingService = /** @class */ (() => {
    let LoadingService = class LoadingService {
        constructor(loadingController) {
            this.loadingController = loadingController;
            this.isLoading = false;
        }
        present() {
            return __awaiter(this, void 0, void 0, function* () {
                this.isLoading = true;
                return yield this.loadingController.create({
                    message: "Please wait..",
                }).then(a => {
                    a.present().then(() => {
                        console.log('presented');
                        if (!this.isLoading) {
                            a.dismiss().then(() => console.log('abort presenting'));
                        }
                    });
                });
            });
        }
        dismiss() {
            return __awaiter(this, void 0, void 0, function* () {
                this.isLoading = false;
                return yield this.loadingController.dismiss().then(() => console.log('dismissed'));
            });
        }
    };
    LoadingService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [LoadingController])
    ], LoadingService);
    return LoadingService;
})();
export { LoadingService };
//# sourceMappingURL=loading.service.js.map