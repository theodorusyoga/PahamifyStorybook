import EStyleSheet from 'react-native-extended-stylesheet';

export const initThemes = (theme) => {
  const basicTheme = {
    // font family
    $fontTitle: 'Nunito-Bold',
    $fontText: 'Nunito-Regular',
    // font size
    $h1: 24,
    $h2: 18,
    $h3: 16,
    $p1: 14,
    $p2: 12,
  };
  const lightTheme = {
    $fontPrimary: 'rgba(29, 57, 98, 1)', // #1D3962, 100%
    $fontSecondary: 'rgba(29, 57, 98, 0.7)', // #1D3962, 70%

    // button
    $primaryBg: 'rgba(59, 115, 197, 1)', // #3B73C5, 100%
    $disabledBg: 'rgba(59, 115, 197, 0.38)', // #3B73C5, 38%
    $white: '#FFFFFF',
  };
  const darkTheme = {};

  EStyleSheet.build({
    ...basicTheme,
    ...(theme === 'dark' ? darkTheme : lightTheme),
  });
};

export const createStylesheet = (styles) => EStyleSheet.create(styles);
