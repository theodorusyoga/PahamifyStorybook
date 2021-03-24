import {createStylesheet} from 'helpers/themes';

export default createStylesheet({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '$h1',
    fontFamily: '$fontTitle',
    color: '$fontPrimary',
  },
  h2: {
    fontSize: '$h2',
    fontFamily: '$fontTitle',
    color: '$fontPrimary',
  },
  h3: {
    fontSize: '$h3',
    fontFamily: '$fontTitle',
    color: '$fontPrimary',
  },
  p1: {
    fontSize: '$p1',
    fontFamily: '$fontText',
    color: '$fontPrimary',
  },
  p2: {
    fontSize: '$p2',
    fontFamily: '$fontText',
    color: '$fontPrimary',
  },
  text: {
    fontFamily: '$fontText',
    color: '$fontPrimary',
  },
  typographyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
    width: '70%',
    left: 0,
  },
});
