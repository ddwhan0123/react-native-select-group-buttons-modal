//Creating Object Model
export const getDataMode = (disabled = false, type = TYPE_CREDIT, credit = 0, cash = 0) => {
    return {
        'disabled': disabled,
        'mode': type,
        'credit': credit,
        'cash': cash,
    };
};

export const TYPE_CREDIT = 'CREDIT';
export const TYPE_MIX = 'MIX';//Mixed mode
export const TYPE_CASH = 'CASH';//just cash
export const TYPE_CUSTOM = 'CUSTOM';//Custom Weight