import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';
import { CourseUnity } from './CourseUnity';

class Activy {

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
    activy_date: string;

    @Column()
    course_unit_id: string
    //Acho que tem que rever se não é algo relacioado ao model CourseUnity

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => CourseUnity, course_unity => course_unity.activies)
    course_unity: CourseUnity
}

export {Activy}