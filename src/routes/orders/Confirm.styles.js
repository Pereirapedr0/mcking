const styles = {
  container: {
    height: '75%',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    backgroundColor: '#fff',
  },
  listBox: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    borderBottom: '1px solid #ccc',
    marginBottom: 2,
  },
  itemBox: {
    flexGrow: 1,
  },
  divider: {
    marginTop: '5px',
    backgroundColor: '#32713d',
    height: '15px',
  },
  boxRelativeToFadeOut: { 
    position: 'relative', 
  },
  boxStickyToFadeOut: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    pointerEvents: 'none',
  },
  addButton: {
    backgroundColor: '#32713d',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#32713d',
    },
    padding: 0,
    width: '10px',
    minWidth: '30px',
    textAlign: 'center',
  },
};

export default styles;