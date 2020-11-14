import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AccountEntity } from "../account/account.entity";

export enum SupportedCharacterRace {
    HUMAN = "Human",
}

@Entity()
export class CharacterEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @ManyToOne(() => AccountEntity, acc => acc.id)
    owner: AccountEntity;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: SupportedCharacterRace })
    race: SupportedCharacterRace;
}
