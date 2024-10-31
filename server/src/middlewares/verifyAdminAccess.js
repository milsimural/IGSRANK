function verifyAdminAccess(req, res, next) {
  const { user } = res.locals;

  // Проверка роли пользователя
  if (user && user.id === 1) {
    next();
  } else {
    res.status(403).send('Требуется роль администратора');
  }
}

module.exports = verifyAdminAccess;
