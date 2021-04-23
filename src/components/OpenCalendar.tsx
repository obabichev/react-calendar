import React from 'react'
import {createUseStyles} from 'react-jss';

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

function formatHour(hour: number): string {
    if (hour < 12) {
        return `${hour} AM`
    }
    if (hour === 12) {
        return '12 PM';
    }
    if (hour === 24) {
        return '';
    }
    return `${hour - 12} PM`
}

const useStyles = createUseStyles({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    underMonth: {
        overflow: 'hidden',
        alignItems: 'stretch',
        display: 'flex',
        flex: '1 1 auto'
    },
    wrapper: {},
    timeContainer: {
        height: 'auto',
        overflowY: 'auto',
        flex: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        minWidth: '40px'
    },
    timeContent: {
        position: 'relative',
        boxSizing: 'border-box',
        marginLeft: 'auto'
    },
    time: {
        position: 'relative',
        height: '48px',
        paddingRight: '48px',
        textAlign: 'right'
        // height: 'auto',
        // flex: 'none',
        // minHeight: '40'
    },
    timeSpan: {
        display: 'block',
        position: 'relative',
        top: '-6px',
        color: '#70757a',
        fontSize: '10px',
        textAlign: 'right'
    },
    container: {
        overflowX: 'auto',
        overflowY: 'scroll',
        display: 'flex',
        alignItems: 'flex-start',
        flex: '1 1 auto',
        '&:scrollbar-thumb': {
            border: '4px solid white',
            boxShadow: 'none',
            background: '#dadce0',
            borderRadius: 8,
            minHeight: 40,
        }
    },
    table: {
        minWidth: '100%',
        flex: 'none',
        display: 'inline-flex',
        verticalAlign: 'top',
        overflow: 'hidden',
        position: 'relative'
    },
    rows: {
        borderTop: '#dadce0 1px solid'
    },
    row: {
        height: '48px',
        '&:after': {
            content: "''",
            borderBottom: '#dadce0 1px solid;',
            position: 'absolute',
            marginTop: '-1px',
            zIndex: '3',
            pointerEvents: 'none',
            width: '100%'
        }
    },
    preColumns: {
        width: 8,
        borderRight: '#dadce0 1px solid'
    },
    column: {
        minWidth: 81,
        width: 81,
        flex: '1 1 auto',
        borderRight: '#dadce0 1px solid'
    },
});

interface Props {
}

export const OpenCalendar: React.FunctionComponent<Props> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.underMonth}>
                <div className={classes.timeContainer}>
                    <div className={classes.timeContent}>
                        <div className={classes.time}>
                            {/*<span className={classes.timeSpan}>12 AM</span>*/}
                        </div>
                        {hours.map(hour => (
                            <div className={classes.time} key={hour}>
                                <span className={classes.timeSpan}>{formatHour(hour)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.table}>
                        <div className={classes.rows}>
                            {hours.map(hour => (
                                <div className={classes.row} key={hour}/>
                            ))}
                        </div>
                        <div className={classes.preColumns}/>

                        <div className={classes.column}/>
                        <div className={classes.column}/>
                        <div className={classes.column}/>
                        <div className={classes.column}/>
                        <div className={classes.column}/>
                        <div className={classes.column}/>
                        <div className={classes.column}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
