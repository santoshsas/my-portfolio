/***
 * Generic method to do xhr call to pull data
 */
export const getData = async (API_URI) => {
  try {
    let response = await fetch(API_URI);
    let data = await response.json();
    return data;
  } catch (e) {
    console.log("Error fetching data in getData method ", e);
  }
};
