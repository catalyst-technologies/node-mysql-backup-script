# node-mysql-backup-script
Use to backup mysql databases

## Setting up backup connection
you can setup backup connection by editing the config.js file's module.exports.db object.
** Example **

```javascript
module.exports.db = {
        host: '127.0.0.1',
        user: 'my_test_user',
        pass: 'my_test_password'
};
```
or
```javascript
module.exports.db = {
        host: '127.0.0.1',
        user: 'db_admin',
        pass: 'lksdjfowu29824'
};
```
The code above will use the following credentials to login to the database.

## Telling the script which databases to backup
The backup script requires you to set the selected databases to backup to be able to backup. you can set the backup script by writing the database names in the array found in config.js in the array module.exports.databases.
** Example **
```javascript
module.exports.databases = [
        'my_admin_db',
        'stagin_site_db'
];
```
or
```javascript
module.exports.databases = [
        'staging_site_db',
        'production_site_db'
];
```
## Setting up backup location
You can setup thre backup location by telling it where to save the backup. You can do this by setting the config.js file module.exports.backup_dir variable with the location.
** Example **
```javascript
module.exports.backup_dir = './backups/';
```
or
```javascript
module.exports.backup_dir = './my-database-backups';
```
This will be set within the script folder only.
