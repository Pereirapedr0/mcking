const styles = {
  container: {
    height: '20%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftContainer: {
    textAlign: 'left',
  },
  rightContainer: {
    textAlign: 'center',
  },
  priceBox: {
    textAlign: 'center',
    margin: 'auto',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cancelButton: {
    backgroundColor: '#708090',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#962e12',
    },
    width: '100%',
  },
  buyButton: {
    backgroundColor: '#708090',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#32713d',
    },
    width: '100%',
  },
}

export default styles;