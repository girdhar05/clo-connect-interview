import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 0 0 16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: 'calc(100% - 32px)',
    height: '20px',
  },
  logo: {
    '& img': {
      height: '20px',
      width: 'auto',
    }
  },
})

export default useStyles