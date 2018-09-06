import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'MTIzNDU2Nzg5XzlfbnVsbF8xXzA6MDowOjA6MDowOjA6MV8yMDE4LTA4LTE0IDE1OjI5OjQ5Ljk4OQ==';
  }
}