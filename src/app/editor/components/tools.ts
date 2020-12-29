export const tags: { name: string, value: Editor.ITool, label: string, icon: string, display: boolean }[] = [{
    name: 'text',
    value: 'TEXT',
    label: 'Text Block',
    icon: 'fa fa-font',
    display: true,
}, {
    name: 'image',
    label: 'Image',
    value: 'IMAGE',
    icon: 'fa fa-picture-o',
    display: true
}, {
    name: 'button',
    label: 'Button',
    value: 'BUTTON',
    icon: 'fa fa-square-o',
    display: true
}, {
    name: 'video',
    label: 'Video',
    value: 'VIDEO',
    icon: 'fa fa-video-camera',
    display: false
}, {
    name: 'linebreak',
    label: 'Line Break',
    value: 'LINEBREAK',
    icon: '',
    display: false
}, {
    name: 'spacer',
    label: 'Spacer',
    value: 'SPACER',
    icon: '',
    display: false
}, {
    name: 'rssfeed',
    label: 'RSS Feed',
    value: 'RSS',
    icon: 'fa fa-rss-square',
    display: false
}, {
    name: 'sociallinks',
    label: 'Social links',
    value: 'SOCIAL',
    icon: 'fa fa-twitter',
    display: false
}, , {
    name: 'htmlblock',
    label: 'HTML Block',
    value: 'HTML',
    icon: 'fa fa-code',
    display: false
}];

export const tagSettings = [
    {
        name: 'Size',
        settings: [
            { name: 'height', type: 'number', postfix: 'px' },
            { name: 'width', type: 'number', postfix: 'px' },
        ],
    },
    {
        name: 'Alignment',
        settings: [
            { name: 'align', type: 'select', option: [{ left: 'LEFT' }, { right: 'RIGHT' }, { center: 'CENTER' }] }
        ],
    },
    {
        name: 'Border',
        settings: [
            { name: 'width', type: 'number', postfix: 'px' },
            { name: 'type', type: 'select', option: [{ solid: 'SOLID' }, { dotted: 'DOTTED' }, { dashed: 'DASHED' }] },
            { name: 'color', type: 'color', }
        ],
    },
    {
        name: 'Background',
        settings: [
            { name: 'color', type: 'color' },
            { name: 'opacity', type: 'number' },
        ],
    },
    {
        name: 'Font',
        settings: [
            { name: 'size', type: 'number', postfix: 'px' },
            { name: 'weight', type: 'px' },
            { name: 'color', type: 'color' },
        ],
    }

]

export const layout = [];

export const toolbar = [{
    name: 'background',
    label: 'Background',
    alias: 'BG',
    displayLabel: true,
    inputs: [{
        name: 'backgroundcolor',
        type: 'color'
    }]
}, {
    name: 'border',
    label: 'Border',
    alias: 'BR',
    displayLabel: true,
    inputs: [{
        name: 'borderwidth',
        type: 'number',
        denomination: 'px'
    }, {
        name: 'bordercolor',
        type: 'color'
    }]
}, {
    name: 'alignment',
    label: 'Alignment',
    alias: 'ALT',
    displayLabel: true,
    inputs: [{
        name: 'borderwidth',
        type: 'radio',
        options: [{
            value: 'left',
            icon: ''
        }, {
            value: 'center',
            icon: ''
        }, {
            value: 'right',
            icon: ''
        }]
    }]
}
];

