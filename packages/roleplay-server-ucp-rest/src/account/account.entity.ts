import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CharacterEntity } from "../character/character.entity";
import { RoleEntity } from "../common/roles/role.entity";

@Entity()
export class AccountEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    discordLinked: string;

    @Column()
    @OneToMany(() => CharacterEntity, char => char.id)
    characters: CharacterEntity[];

    @Column()
    minutesOnline: number; // level is calculated using the actual minutes, so it is not stored anywhere

    @Column()
    @ManyToMany(() => RoleEntity, role => role.id)
    panelRoles: RoleEntity[];
}
