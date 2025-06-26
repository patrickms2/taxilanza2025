<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalizaciontaxisTable extends Migration
{
    public function up()
    {
        Schema::create('localizaciontaxis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_localizacion")->nullable();
            $table->string

("id_taxi")->nullable();
            $table->string

("latitud")->nullable();
            $table->string

("longitud")->nullable();
            $table->timestamp

("ultima_actualizacion")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('localizaciontaxis');
    }
}

