declare namespace ReactDataGrid {
  interface IColumn {
    id?: string| number | null;
    displayName: string;
    type: "TEXT" | "NUMBER";
    is_custom: boolean;
    filter?: any; //component
    width?: number;

    key: string;
    fieldName: string;
    getRowMetaData?: Function;

    formatter?: any;
    sortable?: boolean;
    filterable?: boolean;
    options?: string[];
    is_fixed?: boolean;
    hide?: boolean;
  }
  type ColumnType = 'number' | 'text';

  type SortDirection = 'ASC' | 'DESC' | '';

  interface IFilter {
    name: string;
    text: string;
  }

  interface IPaginated {
    isPaginated: boolean;
    noOfRowsPerPage?: number;
    onPageClick?: any;
    currentPage?: number;
    async?: boolean;
    // if server side else keep showing pages until rows dont match the page limit
    totalRows?: number;
    onNavigate?: any
  }
}