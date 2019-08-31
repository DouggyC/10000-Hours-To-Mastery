function useTool() {
  let weapon = 'Hammer';

  return [() => `Thor ${weapon}`, newWeapon => (name = newWeapon)];
}


const [Groot, hammer ] = useTool()