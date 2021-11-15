export type EditorType = {
    mode: editorModeType,
	palettePicker: palettePickerType,
	fontPicker: fontPickerType,
	figurePicker: figurePickerType,
	Presentation: PresentationType,
    editLog: editLogType,
    selectedSlides: selectedSlidesType,
    selectedElements: Array<idType>,
    activeSlide: idType,
};

export type selectedSlidesType = Array<slidesOrderItemType>;

export type selectedElementsType = Array<idType>;

export type editorModeType = ('view'|'edit');

export type editLogType = {
    undoStack: Array<EditorType>,
    redoStack: Array<EditorType>,
}

export type slidesOrderItemType = {id: idType};

export type slidesOrderType = Array<{id: idType}>;

export type slidesType = {[slideId: idType]: slideType};

export type PresentationType = {
    title: string,
    slidesOrder: slidesOrderType,
    slides: slidesType,
};

export type elementType = {
    id: idType,
    type: 'i'|'t'|'f',
};

export type slideType = {
    id: idType,
    elements: Array<elementType>,
	imageBlocks: imagesElementsType,
	textBlocks: textsElementsType,
	figureBlocks: figuresElementsType,
    backgroundColor: colorType,
};

export type imagesElementsType = {[id: idType]: imageBlockType};

export type imageBlockType = {
    id: idType,
    position: pointType,
    width: number,
    height: number,
    image: string,
};

export type textsElementsType = {[id: idType]: textBlockType};

export type textBlockType = {
    id: idType,
    position: pointType,
    value: string,
    width: number,
    height: number,
    style: {
        color: colorType,
        backgroundColor: colorType,
        size?: number,
        font?: string,
    }
};

export type figuresElementsType = {[id: idType]: figureBlockType};

export type figureBlockType = {
    id: idType,
    type: 't'|'c'|'r',
    position: pointType,
    width: number,
    height: number,
    borderColor: colorType,
    fillColor: colorType,
};

export type colorType  = {
    r: number,
    g: number,
    b: number,
} | 'none';

export type colorsType = Array<colorType>;

export type palettePickerType = {
    colors: colorsType,
    defaultColor: colorType,
    defaultBackgroundColor: colorType,
    activeColor: colorType,
};

export type fontPickerType = {
    sizes: Array<number>,
    defaultSize: number,
    defaultFont: string,
    activeSize: number,
};

export type figurePickerType = Array<triangleType|circleType|rectangleType>; //TODO

export type triangleType = {
    figureType: 't',
    topLeft: pointType,
    bottomRight: pointType,
    borderColor: colorType,
    fillColor: colorType,
};

export type circleType = {
    figureType: 'c',
    center: pointType,
    radius: number,
    borderColor: colorType,
    fillColor: colorType,
};

export type rectangleType = {
    figureType: 'r',
    topLeft: pointType,
    wid: pointType,
    borderColor: colorType,
    fillColor: colorType,
};

export type pointType = {
    x: number,
    y: number
};

export type idType = string;

export const figureType = {
    CIRCLE: 'c',
    TRIANGLE: 't',
    RECTANGLE: 'r',
}

export const ElementType = {
    IMAGE: 'i',
    TEXT: 't',
    FIGURE: 'f',
}

