const API_URL = 'http://wetravel-be.herokuapp.com';
const FINDPATH_API_URL = `${API_URL}/findpath`;

export default class Webapi {
  static async findPath(params) {
    /*
     * Params
     * {
     *   toLocation: [Number, Number],
     *   fromLocation: [Number, Number]
     * }
     */
    console.log(JSON.stringify(params));
    const response = await fetch(FINDPATH_API_URL, {
      method: 'POST',
      body: JSON.stringify(params),
    });
    const json = await response.json();
    return json;
  }
}
