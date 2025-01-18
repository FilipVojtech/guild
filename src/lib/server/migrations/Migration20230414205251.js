'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20230414205251 extends Migration {

  async up() {
    this.addSql('create table `character` (`id` varchar(255) not null, `created_at` datetime not null, `modified_at` datetime not null, `name` varchar(255) not null, `handle` varchar(255) not null, `image` varchar(255) not null default \'https://via.placeholder.com/50\', primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `character` add unique `character_handle_unique`(`handle`);');

    this.addSql('create table `post` (`id` varchar(255) not null, `created_at` datetime not null, `modified_at` datetime not null, `author_id` varchar(255) not null, `body` varchar(255) not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `post` add index `post_author_id_index`(`author_id`);');

    this.addSql('create table `user` (`id` varchar(255) not null, `created_at` datetime not null, `modified_at` datetime not null, `login` varchar(255) not null, `password` varchar(255) not null, `display_name` varchar(255) not null default \'GUILD User\', `refresh_token` varchar(1024) null, `scopes` text not null, primary key (`id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user` add unique `user_login_unique`(`login`);');
    this.addSql('alter table `user` add unique `user_display_name_unique`(`display_name`);');

    this.addSql('create table `user_characters` (`user_id` varchar(255) not null, `character_id` varchar(255) not null, primary key (`user_id`, `character_id`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user_characters` add index `user_characters_user_id_index`(`user_id`);');
    this.addSql('alter table `user_characters` add index `user_characters_character_id_index`(`character_id`);');

    this.addSql('alter table `post` add constraint `post_author_id_foreign` foreign key (`author_id`) references `character` (`id`) on update cascade;');

    this.addSql('alter table `user_characters` add constraint `user_characters_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade on delete cascade;');
    this.addSql('alter table `user_characters` add constraint `user_characters_character_id_foreign` foreign key (`character_id`) references `character` (`id`) on update cascade on delete cascade;');
  }

  async down() {
    this.addSql('alter table `post` drop foreign key `post_author_id_foreign`;');

    this.addSql('alter table `user_characters` drop foreign key `user_characters_character_id_foreign`;');

    this.addSql('alter table `user_characters` drop foreign key `user_characters_user_id_foreign`;');

    this.addSql('drop table if exists `character`;');

    this.addSql('drop table if exists `post`;');

    this.addSql('drop table if exists `user`;');

    this.addSql('drop table if exists `user_characters`;');
  }

}
exports.Migration20230414205251 = Migration20230414205251;
