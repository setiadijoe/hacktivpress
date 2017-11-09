# hacktivpress
hacktivpress final live-code

## Description
Hacktivpress adalah aplikasi web untuk menulis artikel. Nanti ada halaman utama yang memunculkan kumpulan artikel secara ringkas dan daftarnya. Ketika diklik salah satu artikel akan memunculkkan detailnya

Untuk menulisnya ada fitur login dan register. Orang yang belum login hanya bisa melihat tapi tak bisa mengedit atau menghapus artikel yang dibuat. Saat sudah login, user bisa menulis, mengedit dan menghapus artikel yang dia punya

## API Endpoint

List of basic routes:

|Route | HTTP | Description|
|------|------|------------|
|'/users/signin'| POST | user sign in into the application |
|'/users/signup'| POST | user sign up for get account |
|'/articles'| GET | getting all articles from database |
|'/articles/:id'| GET | getting one article with specific id|
|'/articles'| POST | input a new articles into database |
|'/articles/:id'| PUT | edit a significant articles |
|'/articles/:id'| DELETE | delete a significant articles |
|'/articles/:category'| GET | getting all articles with significant category|
|'/articles/:author'| GET | getting all articles with significant author|
