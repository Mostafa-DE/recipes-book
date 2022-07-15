export class User {
  constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {
  }

  get token() {
    const isTokenInValid = !this._tokenExpirationDate || new Date() > this._tokenExpirationDate;
    if (isTokenInValid) return null;
    return this._token;
  }

}
