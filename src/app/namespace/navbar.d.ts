declare namespace Menu{
    interface IMenuItem {
        name: string;
        displayName: string;
        path: string;
        icon?: string;
        showIcon?: boolean;
        components?: any;
      }
    
      interface ISideMenuItem {
        name: string;
        displayName?: string;
        path?: string;
        icon?: string;
        subItems?:IMenuItem[];
      }
      interface ITopBarIconItem{
        name: string;
        path?: string;
        icon: string;
        hasBadge?: boolean;
      }
}