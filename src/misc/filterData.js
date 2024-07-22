export const filterFurniture = (data) => {
  let a = data.items.inventory[0].category
    .filter(
      (furniture) =>
        furniture.id !== "1_4" &&
        furniture.id !== "1_5" &&
        furniture.id !== "1_6"
    )
    .map((furniture) => furniture.items.filter((item) => item.qty != 0))
    .filter((filteredItems) => filteredItems.length > 0) // Ensure we only flatten non-empty arrays
    .flat();

  let count = a.reduce((acc, item) => acc + item.qty, 0);
  let temp = {
    items: a,
    count: count,
  };
  return temp;
};
export const filterElectrials = (data) => {
  let a = data.items.inventory[1].category
    .map((electricals) => electricals.items.filter((item) => item.qty != 0))
    .filter((filteredItems) => filteredItems.length > 0) // Ensure we only flatten non-empty arrays
    .flat();

  let count = a.reduce((acc, item) => acc + item.qty, 0);
  let temp = {
    items: a,
    count: count,
  };

  return temp;
};
export const filterFragile = (data) => {
  let a = data.items.inventory[3].category[2].items.filter(
    (item) => item.qty != 0
  );
  let count = a.reduce((acc, item) => acc + item.qty, 0);
  let temp = {
    items: a,
    count: count,
  };
  return temp;
};
