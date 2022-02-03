module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a32012386fa771a6b550b55997a828c2'),
  },
});
