import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bot extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    guid: string;

    @Column()
    name: string;

    static async getAvailableBot(): Promise<Bot> {
        const query = this.createQueryBuilder('bot');
        const idx = Math.floor(Math.random() * await this.count());

        const bots = await query
                          .where('id > 0')
                          .skip(idx)
                          .take(1)
                          .getMany();

        return bots[0];
    }
}
