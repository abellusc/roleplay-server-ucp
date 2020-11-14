import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../roles/role.entity";

@Entity()
export class PermissionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @ManyToOne(() => RoleEntity, role => role.id)
    role: RoleEntity;

    @Column()
    name: string;

    @Column()
    value: string;
}