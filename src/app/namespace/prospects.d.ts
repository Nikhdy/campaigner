declare namespace Prospects {

    interface IButtonItems {
        name: string;
        displayName: string,
        event: any;
        isAction: boolean;
    }

    interface IFilter {
        fieldName: string;
        value: string | number;
    }

}