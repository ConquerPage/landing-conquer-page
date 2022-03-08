interface IColorProps {
  color0: 'rgba(255,255,255,0.9)';
  color1: '#F5F5F5';
  color2: '#006DBA';
  // color3: '#EC773D',
  color3: '#C34F16';
  color4: '#43464B';
  color5: '#33363B';
  color6: '#282A2F';
  color7: '#212227';
  color8: '#00BDC2';
  color9: '#fff';
  color10: '#000';
}

export const allColors: IColorProps = {
  color0: 'rgba(255,255,255,0.9)',
  color1: '#F5F5F5',
  color2: '#006DBA',
  // color3: '#EC773D',
  color3: '#C34F16',
  color4: '#43464B',
  color5: '#33363B',
  color6: '#282A2F',
  color7: '#212227',
  color8: '#00BDC2',
  color9: '#fff',
  color10: '#000',
};

export const lightTheme = {
  value: 'light',
  body: allColors.color0,
  text: allColors.color7,
  switchToggle: allColors.color5,
  backgroundLinear: allColors.color2,
  secondBackgroundLinear: allColors.color8,
  backgroundButton: allColors.color5,
  backgroundWhyConquerPage: allColors.color1,
  borderLine: allColors.color2,
  cardColor: allColors.color1,
  cardTextColor: allColors.color4,
  cardButtonColor: allColors.color3,
  cardButtonTextColor: allColors.color0,
  pagePlansBackgroundLinear: allColors.color2,
  pagePlansSecondBackgroundLinear: allColors.color8,
};

export const darkTheme = {
  value: 'dark',
  body: allColors.color4,
  text: allColors.color0,
  switchToggle: allColors.color0,
  backgroundLinear: allColors.color4,
  secondBackgroundLinear: allColors.color10,
  backgroundButton: allColors.color3,
  backgroundWhyConquerPage: allColors.color5,
  borderLine: allColors.color3,
  cardColor: allColors.color6,
  cardTextColor: allColors.color0,
  cardButtonColor: allColors.color0,
  cardButtonTextColor: allColors.color4,
  pagePlansBackgroundLinear: allColors.color4,
  pagePlansSecondBackgroundLinear: allColors.color6,
};
