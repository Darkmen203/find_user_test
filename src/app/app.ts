import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './interfaces/interfaces';
import { userList } from './users-list';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('find_user_test');

  public search_name: string = "";

  public filter: string = "all";

  public render_users: User[] = userList;

  private readonly users_list: User[] = userList;

  onChangeSearch() {
    const base = this.filter === 'all'
      ? this.users_list
      : this.users_list.filter(u => this.filter === 'active' ? u.active : !u.active);

    const q = this.search_name.trim().toLowerCase();

    this.render_users = q
      ? base.filter(u => u.name.toLowerCase().startsWith(q))
      : base;
  }
}
