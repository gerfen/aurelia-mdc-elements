var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject, bindable, bindingMode, DOM } from 'aurelia-framework';
import { MDCRadio } from '@material/radio/dist/mdc.radio.min';

export let MdcRadio = (_dec = inject(Element), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = (_class2 = class MdcRadio {

    constructor(element) {
        _initDefineProp(this, 'checked', _descriptor, this);

        _initDefineProp(this, 'disabled', _descriptor2, this);

        _initDefineProp(this, 'id', _descriptor3, this);

        _initDefineProp(this, 'label', _descriptor4, this);

        _initDefineProp(this, 'secondarylabel', _descriptor5, this);

        _initDefineProp(this, 'name', _descriptor6, this);

        _initDefineProp(this, 'model', _descriptor7, this);

        this.element = element;
    }

    bind() {
        this.mdcRadio = new MDCRadio(this.element);
    }

    handleChange(e) {
        e.stopPropagation();
    }

    checkedChanged(newValue) {
        const event = new CustomEvent('change', { bubbles: true, detail: { value: newValue } });
        this.element.dispatchEvent(event);
    }

    disabledChanged(newValue) {
        this.mdcRadio.disabled = !!newValue;
    }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'checked', [_dec2], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'id', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'secondarylabel', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'name', [bindable], {
    enumerable: true,
    initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'model', [bindable], {
    enumerable: true,
    initializer: null
})), _class2)) || _class);