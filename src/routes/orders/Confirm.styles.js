const styles = {
  container: {
    height: 'auto',
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
  boxRelativeToFadeOut: { 
    position: 'relative', 
  },
  boxStickyToFadeOut: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
    height: 'auto',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    pointerEvents: 'none',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cancelButton: {
    backgroundColor: '#32713d',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#32713d',
    },
    width: '100%',
  },
  buyButton: {
    backgroundColor: '#32713d',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#32713d',
    },
    width: '100%',
  },
  divider: {
    marginTop: '5px',
    backgroundColor: '#EEE8AA',
    height: '15px',
  },

  
};

export default styles;