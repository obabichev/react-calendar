import React from 'react'
import {createUseStyles} from 'react-jss';
import {formatHour, hours} from './constants';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flex: 'none'
    },
    preDatesBlock: {
        whiteSpace: 'no-wrap',
        display: 'flex',
        flex: 'none',
        flexDirection: 'column'
    },
    preDatesBlock2: {
        flex: 1,
        marginLeft: 1,
        minWidth: 40
    },
    timesContainer: {
        marginLeft: 0,
        display: 'inline-block',
        visibility: 'hidden',
        overflowY: 'hidden',
        height: 0,
        maxWidth: 80
    },
    time: {
        boxSizing: 'border-box',
        minWidth: 48,
        padding: 4,
        whiteSpace: 'no-wrap',
        color: '#70757a',
        fontSize: '10px',
        visibility: 'hidden'
    },
    datesBlock: {
        marginLeft: -1,
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
    },
    datesRow: {}
});

interface DatesHeaderProps {
}

export const DatesHeader: React.FunctionComponent<DatesHeaderProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.preDatesBlock}>
                <div className={classes.preDatesBlock2}>
                    <div className={classes.timesContainer}>
                        {hours.map(hour => (
                            <div className={classes.time}>
                                {formatHour(hour)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes.datesBlock}>
                <div className={classes.datesRow}>

                </div>
            </div>
        </div>
    );
};
