declare namespace Editor{
    type ITool = 'TEXT' | 'IMAGE' | 'BUTTON' | 'SPACER' | 'LINEBREAK' | 'SOCIAL' | 'RSS' | 'HTML' | 'VIDEO';
    type IAlignment = 'LEFT' | 'RIGHT' | 'CENTER';
    type ILayout = 'COLUMN'|'ROW';
    type IBorderStyle = SOLID| DOTTED | DASHED | DOUBLE | GROOVE | RIDGE | INSET | OUTSET;
    interface ITagSettings {
        align: IAlignment;
        height: number;
        width: number;
        margin ?: {left: number, right: number , top: number, bottom: number};
        padding ?: {left: number, right: number , top: number, bottom: number};
        fontSize?: number;
        fontWeight?: number;
        color?: string;
        backgroundColor?:  string;
        border?: number;
        borderColor?: string;
        borderType?: IBorderStyle;
    }
}