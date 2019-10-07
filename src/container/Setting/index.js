import React, { useContext, useState} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import * as ACTIONS from '../../store/actions/actions'
import Context from '../../utils/context'
import './index.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  }
}));


export default function Setting() {
  const context = useContext(Context)
  const [M, setM] = useState(0)
  const [N, setN] = useState(0)
  const classes = useStyles()

  const save = () => {
    context.dispatch.setVisibleTable({m: M, n: N, ...ACTIONS.SHOW_TABLE})
  }

  const clear = () => {
    context.dispatch.setVisibleTable(ACTIONS.HIDE_TABLE)
  }

  // context.state.table

  return (
    <div className='setting'>
      {!context.state.table ? (<div className='starting'>
        <div className='inputs'>
          <TextField
            className={classes.margin}
            label="M"
            variant="outlined"
            value={M == false ? '' : M}
            onChange={t => setM(t.target.value)}
            id="mui-theme-provider-outlined-input"
          />
          <TextField
            className={classes.margin}
            label="N"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            value={N == false ? '' : N}
            onChange={t => setN(t.target.value)}
          />
        </div>
        <div className='button'>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => save()}
          >
            Primary
          </Button>
        </div>
      </div>)
      :
      (<div className='restarting'>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => clear()}
        >
          Restart
        </Button>
      </div>)}
    </div>
  );
}