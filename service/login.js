const { exec } = require('../db/mysql')

const validateName = ({
  username,
  password
}) => {
  const sql = `select * from yc_user where username = '${username}' and password='${password}';`
  return exec(sql)
}


module.exports = {
  validateName
}