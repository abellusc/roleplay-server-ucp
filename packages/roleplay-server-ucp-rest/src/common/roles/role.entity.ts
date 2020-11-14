import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PermissionEntity } from '../permissions/permission.entity';

@Entity()
export class RoleEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    discordGroup: number; // if the user has this discord group, they will be considered part of this group (so we don't have to store memberships)

    @Column()
    @OneToMany(() => PermissionEntity, perm => perm.id)
    permissions: PermissionEntity[];
}
