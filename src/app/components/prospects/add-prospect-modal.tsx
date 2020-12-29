import * as React from 'react';
import { connect } from 'react-redux';
import { translate } from '../../locales';
import { FC } from 'react';
import { Form } from 'app/shared/form';
import { Input } from 'app/shared/form/field-types';
import _ from 'lodash';
import { Modal } from '../../shared/modal/modal';

interface IProspectProsps {
    prospect?: any;
    columns: ReactDataGrid.IColumn[];
    closeModal?:()=>void;
    isOpen: boolean;
}
const AddUpdateProspectUnwrapped: FC<IProspectProsps> = (props) => {
    const validate = (values) => {
        let errors = {};

        return errors;
    }

    const onSubmit = (values) => {

    }




    return <Modal header={translate('CREATE_CAMPAIGN', 'create campaign')} size="md">
        <Form onSubmit={onSubmit} validateDefs={validate}>
            {_.map(props.columns, (column) => <Input name={column.fieldName} type={column.type.toLowerCase()} label={column.displayName}/>)}
        </Form>
    </Modal>
}

  // create prospect dispatch
  // also selected prospect if it exists to modify
const mapStateToProps = (state) => {
    return {
        columns: state.prospectReducer.columns,
        prospects: state.prospectReducer.prospects
    }
}
const AddUpdateProspect = connect(mapStateToProps, null)(AddUpdateProspectUnwrapped);
export default AddUpdateProspect;