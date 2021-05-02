import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import { Activy } from './Activy';

class CourseUnity {

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Activy, activy => activy.course_unity)
    activies: Activy[]
}

export {CourseUnity}