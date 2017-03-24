import React from "react";
import { mount } from "enzyme";
import FieldValue from "./FieldValue";
import { I18n } from "react-i18nify";

I18n.setHandleMissingTranslation(key => key);


function setup() {
    const props = {
        caption: "test caption",
        value: "test value",
        className: "test-class",
    };

    const enzymeWrapper = mount(<FieldValue {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe("components", () => {

    describe("FieldValue", () => {
        it("should render with properties", () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find(".fieldValue").hasClass("test-class")).toBe(true);
            expect(enzymeWrapper.find(".caption").text()).toBe("test caption");
            expect(enzymeWrapper.find(".value").text()).toBe("test value");
        });
    });

});