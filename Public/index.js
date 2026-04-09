let startFunc = async () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "Ledgers",
        endPoints: {
            create: "/Ledgers/V1/Insert",
            update: "",
            delete: "",
            read: "/Api/V2/Ledgers/GetFromTally"
        },
        options: {
            firstRow: {
                showSearch: true
            },
            vertical: {
                showVertical: false
            },
            table: {
                showSerial: true,
                showFooter: false,
                footer: {
                    showDataList: true
                }
            },
            dataList: {
                show: false
            }
        },
        columnsConfig: [
            { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
            { columnName: "LedgerParentName", isRequired: false },
            { columnName: "LedgerType", isRequired: false },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        layout: {
            verticalPosition: "top" // or left/right/bottom
        }
    };

    window.KSTable.init(config);
};

startFunc();