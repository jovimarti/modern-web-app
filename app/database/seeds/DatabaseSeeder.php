<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		 $this->call('UserTableSeeder');
	}

}

class UserTableSeeder extends Seeder{

    public function run(){
        DB::table('users')->delete();

        $user = new User();
        $user->username = "admin";
        $user->email = "jovimartinezamoros@gmail.com";
        $user->setPassword('10111213');
        $user->save();

    }
}