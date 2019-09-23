import { TheDb } from './thedb';

/**
 * Simple class for selecting, inserting, updating and deleting Heroes in hero table.
 *
 * @export
 * @class Hero
 */
export class Product {
    public id = -1;
    public name = '';
    public price = 50;

    public static get(id: number): Promise<Product> {
        const sql = 'SELECT * FROM products WHERE id = $id';
        const values = { $id: id };

        return TheDb.selectOne(sql, values)
            .then((row) => {
                if (row) {
                    return new Product().fromRow(row);
                } else {
                    throw new Error('Expected to find 1 Hero. Found 0.');
                }
            });
    }

    public static getAll(): Promise<Product[]> {
        const sql = `SELECT * FROM products ORDER BY name`;
        const values = {};

        return TheDb.selectAll(sql, values)
            .then((rows) => {
                const heroes: Product[] = [];
                for (const row of rows) {
                    const hero = new Product().fromRow(row);
                    heroes.push(hero);
                }
                return heroes;
            });
    }

    public insert(product : any): Promise<void> {
        console.log(product);
        const sql = `
            INSERT INTO products (name, price)
            VALUES($name, $price)`;

        const values = {
            $name: product.name,
            $price: product.price
        };
        console.log(values);
        console.log('in insert function');

        return TheDb.insert(sql, values)
            .then((result) => {
                if (result.changes !== 1) {
                    throw new Error(`Expected 1 Hero to be inserted. Was ${result.changes}`);
                } else {
                    console.log(result);
                    this.id = result.lastID;
                }
            });
    }

    public update(): Promise<void> {
        const sql = `
            UPDATE products
               SET name = $name, price = $price
             WHERE id = $id`;

        const values = {
            $name: this.name,
            $price: this.price,
            $id: this.id
        };

        return TheDb.update(sql, values)
            .then((result) => {
                console.log(result);
                if (result.changes !== 1) {
                    throw new Error(`Expected 1 Hero to be updated. Was ${result.changes}`);
                }
            });
    }

    public delete(): Promise<void> {
        const sql = `
            DELETE FROM products WHERE id = $id`;

        const values = {
            $id: this.id,
        };

        return TheDb.delete(sql, values)
            .then((result) => {
                if (result.changes !== 1) {
                    throw new Error(`Expected 1 Hero to be deleted. Was ${result.changes}`);
                }
            });
    }

    public fromRow(row: object): Product {
        this.id = row['id'];
        this.name = row['name'];
        this.price = row['price'];

        return this;
    }
}
