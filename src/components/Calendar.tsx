import React from 'react'
import {CalendarBody} from './CalendarBody';
import {DatesHeader} from './DatesHeader';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
});

interface CalendarProps {
}

export const Calendar: React.FunctionComponent<CalendarProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <DatesHeader/>
            <CalendarBody/>
        </div>
    );
};
