const randomPalette = async () => {
  try {
      const response = await fetch('https://palettes.deta.dev/random/palette');
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log(error);
  }
}
randomPalette();
