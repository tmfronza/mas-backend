import {Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {CourseUnity} from './CourseUnity';

@Entity("activies")
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
    activy_date: Date;

    @Column()
    courseUnitId: string;

    @Column()
    grade: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => CourseUnity, course_unities => course_unities.activies)
    @JoinTable()
    course_unit: CourseUnity
}

export {Activy};