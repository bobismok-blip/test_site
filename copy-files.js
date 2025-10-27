import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { dirname } from 'path'

const filesToCopy = [
  'logs/PHP_errors.log',
  'logs/access.log',
  'configs/site.conf',
  'configs/ftp.conf',
  'configs/database.conf',
  'backup/database_backup.sql',
  'backup/secrets.txt',
  'test_data/users.xls.txt',
  'test_data/credentials.txt',
  'robots.txt',
  '.htaccess',
  'phpinfo.php',
  'wp-config.txt',
]

filesToCopy.forEach(file => {
  try {
    const dest = `dist/${file}`
    const destDir = dirname(dest)
    
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true })
    }
    
    copyFileSync(file, dest)
    console.log(`✓ Copied ${file}`)
  } catch (e) {
    console.log(`✗ Could not copy ${file}: ${e.message}`)
  }
})

console.log('✅ All test files copied!')

