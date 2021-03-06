'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, DropTarget;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('DropTarget', DropTarget = (_dec = customAttribute(constants.attributePrefix + 'drop-target'), _dec2 = generateBindables('kendoDropTarget'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function DropTarget(element, widgetBase) {
          _classCallCheck(this, DropTarget);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoDropTarget').useElement(this.element).linkViewModel(this);
        }

        DropTarget.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        DropTarget.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        DropTarget.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        DropTarget.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        DropTarget.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        DropTarget.prototype.detached = function detached() {
          this.destroy();
        };

        return DropTarget;
      }()) || _class) || _class) || _class));

      _export('DropTarget', DropTarget);
    }
  };
});
//# sourceMappingURL=../dist/dev/drop-target/drop-target.js.map
