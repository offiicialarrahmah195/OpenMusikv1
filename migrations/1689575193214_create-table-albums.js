// eslint-disable-next-line no-unused-vars
exports.up = (pgm) => {
  pgm.createTable('albums', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,

    },
    name: {
      type: 'string',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },

  });

  /**
   * 1. @TODO
   * Buatlah table albums dengan `pgm.createTable` dengan kolom:
   *  - id: primary key, tipe data string (varchar), dan tidak boleh null
   *  - name: tipe data string (varchar), dan tidak boleh null
   *  - year: tipe data integer, dan tidak boleh null
   *
   *  Catatan: referensi modul Dicoding: https://www.dicoding.com/academies/271/tutorials/17468
   */
};

exports.down = (pgm) => {
  pgm.dropTable('albums');
};
